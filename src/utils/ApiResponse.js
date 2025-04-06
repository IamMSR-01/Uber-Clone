class ApiResponse{
    constructor(status, message, data) {
        this.status = status;
        this.message = message;
        this.data = data;
        this.success = status >= 200 && status < 400;
    }
}

export { ApiResponse };