export class PageInfo <T> {
    content: T;
    first: boolean;
    last: boolean;
    sort: string;
    pageSize: number;
    numberOfElements: number;
    totalPages: number;
    totalElements: number;
}


// Model de informações de paginação vinda da API.