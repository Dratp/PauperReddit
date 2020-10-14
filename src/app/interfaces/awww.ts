export interface Awww {
    kind: string;
    data: Data;

}

export interface Data{
    modhash:string;
    dist: number;
    children: Child[];
}

export interface Child{
    kind: string;
    data: RealStuff;
}

export interface RealStuff{
    title: string;
    thumbnail: string;
    permalink: string;
}
