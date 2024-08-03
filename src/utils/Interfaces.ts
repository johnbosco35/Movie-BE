export interface user{
    username: string;
    email: string;
    password: string;
    googleId: string;
}

export interface Movie{
    title: string;
    description: string;
    genre: string,
    releaseDate: Date;
    rating: number
}