import Request from '../interface/Request';
import Response from '../interface/Response';

export default abstract class ApiMiddleware {

    public abstract handle(request: Request, response: Response, next: () => void): Promise<void>;

    protected respondWithError(response: Response, message: string, code = 400): void {
        response.status(code).json({message});
    }
}
