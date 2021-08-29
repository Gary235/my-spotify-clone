export interface IArtist {
  externalUrls: unknown; // {spotify: "https://open.spotify.com/artist/2CIMQHirSU0MQqyYHq0eOx";};
  followers: unknown; // {    href: null;    total: 2631989;};
  genres: string[];
  // [
  //   "canadian electronic",
  //   "edm",
  //   "electro house",
  //   "pop dance",
  //   "progressive house"
  // ];
  href: string; // "https://api.spotify.com/v1/artists/2CIMQHirSU0MQqyYHq0eOx";
  id: string; // "2CIMQHirSU0MQqyYHq0eOx";
  images: unknown[];
  // [
  //   {
  //     height: 640;
  //     url: "https://i.scdn.co/image/ab6761610000e5ebc5ceb05f152103b2b70d3b07";
  //     width: 640;
  //   },
  //   {
  //     height: 320;
  //     url: "https://i.scdn.co/image/ab67616100005174c5ceb05f152103b2b70d3b07";
  //     width: 320;
  //   },
  //   {
  //     height: 160;
  //     url: "https://i.scdn.co/image/ab6761610000f178c5ceb05f152103b2b70d3b07";
  //     width: 160;
  //   }
  // ];
  name: string; // "deadmau5";
  popularity: number; // 71;
  type: string; // "artist";
  uri: string; // "spotify:artist:2CIMQHirSU0MQqyYHq0eOx";
}
