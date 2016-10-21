export class Configuration {
    public basePath: string = 'http://hostme-services-qa.azurewebsites.net';

    constructor(
            basePath?: string,
            public apiKey?: string,
            public username?: string,
            public password?: string,
            public accessToken?: string) {
                if (basePath) {
                    this.basePath = basePath;
                }
    }
}