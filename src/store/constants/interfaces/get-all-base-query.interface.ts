export interface GetAllBaseQuery {
    search?: string;
    order?: 'asc' | 'desc';
    sortBy?: string;
    page?: number;
    limit?: number;
    offset?: number;
}