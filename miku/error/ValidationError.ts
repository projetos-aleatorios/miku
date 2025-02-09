import MikuError from './Error';

export default class ValidationError {
    public constructor(private readonly data: any) {

        if ('code' in this.data) {
            const { code, message } = this.data;
            throw new MikuError({ code: code, type: 'Miku', message: message, error_details: data?.errors })
        }

        throw new MikuError({ code: 500, type: 'Miku', message: 'unknown' })
    }
}