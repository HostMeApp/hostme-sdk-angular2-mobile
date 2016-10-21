import { AuthorizationService, Configuration } from '../src/index';
import { TestBed, inject, fakeAsync  } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { BaseRequestOptions, Http, ConnectionBackend, ResponseOptions, Response, HttpModule  } from '@angular/http';

describe('AuthorizationService ut', () => {
  let service: AuthorizationService;
  let configuration: Configuration;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          deps: [MockBackend, BaseRequestOptions],
          provide: Http, useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
                return new Http(backend, defaultOptions);
          }
        },
        {
            deps: [Http, Configuration],
            provide: AuthorizationService, useFactory: (http: Http, config: Configuration) => {
                return new AuthorizationService(config, http);
            }
        },
        {provide: MockBackend, useClass: MockBackend},
        {provide: BaseRequestOptions, useClass: BaseRequestOptions},
        {provide: Configuration, useFactory: () => {
                configuration = new Configuration();
                return configuration;
            }
        }
      ]
    });
  });

  beforeEach(inject([AuthorizationService, MockBackend], (authorizationService: AuthorizationService, mockBackend: MockBackend) => {
    mockBackend.connections.subscribe((c: any) => {
        let response = new ResponseOptions({body: '{"access_token": "test_token"}'});
        c.mockRespond(new Response(response));
    });

    service = authorizationService;
  }));

  it('should get user token', fakeAsync(() => {
    service.authorize('example@mail.com', 'password').subscribe(() => {
        expect(configuration.accessToken).toEqual('test_token');
    });
  }));

});

describe('AuthorizationService it', () => {
    let service: AuthorizationService;
    let configuration: Configuration;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule],
            providers: [
                ConnectionBackend,
                {
                    deps: [Http, Configuration],
                    provide: AuthorizationService, useFactory: (http: Http, config: Configuration) => {
                        return new AuthorizationService(config, http);
                    }
                },
                {provide: Configuration, useFactory: () => {
                        configuration = new Configuration();
                        return configuration;
                    }
                }
            ]
        });
    });

    beforeEach(inject([AuthorizationService], (s: any) => {
        service = s;
    }));

    it('should get user token', (done: any) => {
        service.authorize('konovalov.yuriy@gmail.com', 'z1z2z3z4').subscribe(() => {
            expect(configuration.accessToken).toBeDefined();
            done();
        });
  });
});