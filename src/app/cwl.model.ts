interface Round{
  warTags:string[];
}
interface Clan{
  tag: string;
  clanLevel: number;
  name: string;
  members:Member[];
  badgeUrls: {}
}
interface Member{
  tag: string;
      townHallLevel: number;
      name: string;
}
export interface Cwl{
    tag: string;
    state: string;
    season: string;
    clans: Clan[];
    rounds:Round[] ;
}
