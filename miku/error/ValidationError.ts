import MikuError from './Error';

export default class ValidationError {
    public constructor(private readonly data: any) {
        switch (true) {
            case this.data?.code == 0:
                const [code, message] = this.data.message.split(':');
                throw new MikuError({ code: Number(code), type: 'Miku', message: message?.trim() })
            case 'errors' in this.data: {
                throw new MikuError({ code: data.code, type: 'Miku', message: data.message, error_details: data.errors })
            }
        }
    }
}