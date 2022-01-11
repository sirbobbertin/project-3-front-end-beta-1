import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { User } from '../models/user.model';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });
    service = TestBed.inject(UserService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  describe('updateUserService', () => {
    it('makes expected calls', () => {
      const userStub: User = <any>{};
      const httpTestingController = TestBed.inject(HttpTestingController);
      service.updateUserService(userStub).subscribe(res => {
        expect(res).toEqual(userStub);
      });
      const req = httpTestingController.expectOne('HTTP_ROUTE_GOES_HERE');
      expect(req.request.method).toEqual('PUT');
      req.flush(userStub);
      httpTestingController.verify();
    });
  });
});
