import { UserService } from './user.service';

describe('UserService', () => {
  let userService: UserService;
  let httpClientSpyObj: { get: jasmine.Spy };

  beforeEach(() => {
    httpClientSpyObj = jasmine.createSpyObj('HttpClient', ['get']);
    userService = new UserService(httpClientSpyObj as any);
  });

  it('should call httpClient to /some-api/search with correct query param', () => {
    userService.search('test');

    expect(httpClientSpyObj.get.calls.count()).toBe(1);
    expect(httpClientSpyObj.get.calls.mostRecent().args).toContain(
      '/some-api/search?q=test'
    );
  });
});
