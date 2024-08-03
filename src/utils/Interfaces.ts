export interface User{
    username: string;
    email: string;
    password: string;
}

export interface Movie{
    title: string;
    description: string;
    genre: string,
    releaseDate: Date;
    rating: number
}