export interface SteamCmdResponse {
  data: Data;
  status: string;
}

export interface Data {
  "730": N730;
}

export interface N730 {
  _change_number: number;
  _missing_token: boolean;
  _sha: string;
  _size: number;
  appid: string;
  common: Common;
  config: Config;
  depots: Depots;
  extended: Extended;
  install: Install;
  ufs: Ufs;
}

export interface Common {
  associations: Associations;
  category: Category;
  clienticns: string;
  clienticon: string;
  clienttga: string;
  community_hub_visible: string;
  community_visible_stats: string;
  content_descriptors: ContentDescriptors;
  content_descriptors_including_dlc: ContentDescriptorsIncludingDlc;
  controllertagwizard: string;
  exfgls: string;
  gameid: string;
  genres: Genres;
  header_image: HeaderImage;
  icon: string;
  languages: Languages;
  library_assets: LibraryAssets;
  library_assets_full: LibraryAssetsFull;
  linuxclienticon: string;
  logo: string;
  logo_small: string;
  market_presence: string;
  metacritic_url: string;
  name: string;
  name_localized: NameLocalized;
  osarch: string;
  osextended: string;
  oslist: string;
  primary_genre: string;
  releasestatesteamchina: string;
  review_percentage: string;
  review_score: string;
  small_capsule: SmallCapsule;
  steam_deck_compatibility: SteamDeckCompatibility;
  steam_release_date: string;
  steamchinaapproved: string;
  store_asset_mtime: string;
  store_tags: StoreTags;
  supported_languages: SupportedLanguages;
  timeline_marker_svg: string;
  timeline_marker_updated: string;
  type: string;
  workshop_visible: string;
}

export interface Associations {
  "0": N0;
  "1": N1;
}

export interface N0 {
  name: string;
  type: string;
}

export interface N1 {
  name: string;
  type: string;
}

export interface Category {
  category_1: string;
  category_15: string;
  category_27: string;
  category_29: string;
  category_30: string;
  category_33: string;
  category_35: string;
  category_41: string;
  category_42: string;
  category_43: string;
  category_45: string;
  category_46: string;
  category_63: string;
  category_64: string;
  category_66: string;
  category_67: string;
  category_68: string;
  category_69: string;
  category_70: string;
  category_74: string;
  category_8: string;
}

export interface ContentDescriptors {
  "0": string;
  "1": string;
}

export interface ContentDescriptorsIncludingDlc {
  "0": string;
  "1": string;
}

export interface Genres {
  "0": string;
  "1": string;
}

export interface HeaderImage {
  english: string;
  sc_schinese: string;
  schinese: string;
}

export interface Languages {
  brazilian: string;
  bulgarian: string;
  czech: string;
  danish: string;
  dutch: string;
  english: string;
  finnish: string;
  french: string;
  german: string;
  greek: string;
  hungarian: string;
  indonesian: string;
  italian: string;
  japanese: string;
  koreana: string;
  latam: string;
  norwegian: string;
  polish: string;
  portuguese: string;
  romanian: string;
  russian: string;
  schinese: string;
  spanish: string;
  swedish: string;
  tchinese: string;
  thai: string;
  turkish: string;
  ukrainian: string;
  vietnamese: string;
}

export interface LibraryAssets {
  library_capsule: string;
  library_hero: string;
  library_logo: string;
  logo_position: LogoPosition;
}

export interface LogoPosition {
  height_pct: string;
  pinned_position: string;
  width_pct: string;
}

export interface LibraryAssetsFull {
  library_capsule: LibraryCapsule;
  library_hero: LibraryHero;
  library_logo: LibraryLogo;
}

export interface LibraryCapsule {
  image: Image;
  image2x: Image2x;
}

export interface Image {
  english: string;
  schinese: string;
}

export interface Image2x {
  english: string;
  schinese: string;
}

export interface LibraryHero {
  image: Image2;
  image2x: Image2x2;
}

export interface Image2 {
  english: string;
  schinese: string;
}

export interface Image2x2 {
  english: string;
  schinese: string;
}

export interface LibraryLogo {
  image: Image3;
  image2x: Image2x3;
  logo_position: LogoPosition2;
}

export interface Image3 {
  english: string;
  schinese: string;
}

export interface Image2x3 {
  english: string;
  schinese: string;
}

export interface LogoPosition2 {
  height_pct: string;
  pinned_position: string;
  width_pct: string;
}

export interface NameLocalized {
  sc_schinese: string;
}

export interface SmallCapsule {
  english: string;
  sc_schinese: string;
  schinese: string;
}

export interface SteamDeckCompatibility {
  category: string;
  configuration: Configuration;
  steamos_compatibility: string;
  steamos_tests: SteamosTests;
  test_timestamp: string;
  tested_build_id: string;
  tests: Tests;
}

export interface Configuration {
  gamescope_frame_limiter_not_supported: string;
  hdr_support: string;
  non_deck_display_glyphs: string;
  primary_player_is_controller_slot_0: string;
  recommended_runtime: string;
  requires_h264: string;
  requires_internet_for_setup: string;
  requires_internet_for_singleplayer: string;
  requires_manual_keyboard_invoke: string;
  requires_non_controller_launcher_nav: string;
  requires_voice_files: string;
  small_text: string;
  supported_input: string;
}

export interface SteamosTests {
  "0": N02;
}

export interface N02 {
  display: string;
  token: string;
}

export interface Tests {
  "0": N03;
  "1": N12;
  "2": N2;
  "3": N3;
}

export interface N03 {
  display: string;
  token: string;
}

export interface N12 {
  display: string;
  token: string;
}

export interface N2 {
  display: string;
  token: string;
}

export interface N3 {
  display: string;
  token: string;
}

export interface StoreTags {
  "0": string;
  "1": string;
  "10": string;
  "11": string;
  "12": string;
  "13": string;
  "14": string;
  "15": string;
  "16": string;
  "17": string;
  "18": string;
  "19": string;
  "2": string;
  "3": string;
  "4": string;
  "5": string;
  "6": string;
  "7": string;
  "8": string;
  "9": string;
}

export interface SupportedLanguages {
  brazilian: Brazilian;
  bulgarian: Bulgarian;
  czech: Czech;
  danish: Danish;
  dutch: Dutch;
  english: English;
  finnish: Finnish;
  french: French;
  german: German;
  greek: Greek;
  hungarian: Hungarian;
  indonesian: Indonesian;
  italian: Italian;
  japanese: Japanese;
  koreana: Koreana;
  latam: Latam;
  norwegian: Norwegian;
  polish: Polish;
  portuguese: Portuguese;
  romanian: Romanian;
  russian: Russian;
  schinese: Schinese;
  spanish: Spanish;
  swedish: Swedish;
  tchinese: Tchinese;
  thai: Thai;
  turkish: Turkish;
  ukrainian: Ukrainian;
  vietnamese: Vietnamese;
}

export interface Brazilian {
  supported: string;
}

export interface Bulgarian {
  supported: string;
}

export interface Czech {
  supported: string;
}

export interface Danish {
  supported: string;
}

export interface Dutch {
  supported: string;
}

export interface English {
  full_audio: string;
  supported: string;
}

export interface Finnish {
  supported: string;
}

export interface French {
  supported: string;
}

export interface German {
  supported: string;
}

export interface Greek {
  supported: string;
}

export interface Hungarian {
  supported: string;
}

export interface Indonesian {
  supported: string;
}

export interface Italian {
  supported: string;
}

export interface Japanese {
  supported: string;
}

export interface Koreana {
  supported: string;
}

export interface Latam {
  supported: string;
}

export interface Norwegian {
  supported: string;
}

export interface Polish {
  supported: string;
}

export interface Portuguese {
  supported: string;
}

export interface Romanian {
  supported: string;
}

export interface Russian {
  supported: string;
}

export interface Schinese {
  supported: string;
}

export interface Spanish {
  supported: string;
}

export interface Swedish {
  supported: string;
}

export interface Tchinese {
  supported: string;
}

export interface Thai {
  supported: string;
}

export interface Turkish {
  supported: string;
}

export interface Ukrainian {
  supported: string;
}

export interface Vietnamese {
  supported: string;
}

export interface Config {
  app_mappings: AppMappings;
  cegpublickey: string;
  checkforupdatesbeforelaunch: string;
  checkguid: string;
  contenttype: string;
  duration_control_show_interstitial: string;
  enable_duration_control: string;
  enabletextfiltering: string;
  gameoverlay_testmode: string;
  installdir: string;
  installscriptoverride: string;
  installscriptsignature: string;
  launch: Launch;
  launchwithoutworkshopupdates: string;
  matchmaking_mms_appidinvitenf: string;
  matchmaking_rate_limit: string;
  matchmaking_uptodate: string;
  "sdr-groups": string;
  "sdr-groups-global": string;
  signaturescheckedonlaunch: Signaturescheckedonlaunch;
  signedfiles: Signedfiles;
  steam_china_only: SteamChinaOnly;
  steamconfigurator3rdpartynative: string;
  steamcontrollertemplateindex: string;
  steamdecktouchscreen: string;
  systemprofile: string;
  uselaunchcommandline: string;
  usemms: string;
  usesfrenemies: string;
  vacmodulefilename: string;
  vacmodulefilename_macos: string;
  verifyupdates: string;
}

export interface AppMappings {
  "1": N13;
}

export interface N13 {
  comment: string;
  platform: string;
  tool: string;
}

export interface Launch {
  "0": N04;
  "1": N14;
  "2": N22;
  "3": N32;
  "4": N4;
  "5": N5;
  "6": N6;
  "7": N7;
  "8": N8;
  "9": N9;
}

export interface N04 {
  arguments: string;
  config: Config2;
  executable: string;
}

export interface Config2 {
  osarch: string;
  oslist: string;
  realm: string;
}

export interface N14 {
  arguments: string;
  config: Config3;
  executable: string;
}

export interface Config3 {
  osarch: string;
  oslist: string;
  realm: string;
}

export interface N22 {
  arguments: string;
  config: Config4;
  description: string;
  description_loc: DescriptionLoc;
  executable: string;
  type: string;
}

export interface Config4 {
  betakey: string;
  oslist: string;
  realm: string;
}

export interface DescriptionLoc {
  english: string;
}

export interface N32 {
  arguments: string;
  config: Config5;
  description: string;
  description_loc: DescriptionLoc2;
  executable: string;
  type: string;
}

export interface Config5 {
  betakey: string;
  oslist: string;
  realm: string;
}

export interface DescriptionLoc2 {
  english: string;
}

export interface N4 {
  arguments: string;
  config: Config6;
  executable: string;
}

export interface Config6 {
  oslist: string;
  realm: string;
}

export interface N5 {
  arguments: string;
  config: Config7;
  description: string;
  description_loc: DescriptionLoc3;
  executable: string;
  type: string;
}

export interface Config7 {
  betakey: string;
  oslist: string;
  ownsdlc: string;
  realm: string;
}

export interface DescriptionLoc3 {
  english: string;
}

export interface N6 {
  arguments: string;
  config: Config8;
  description: string;
  description_loc: DescriptionLoc4;
  executable: string;
}

export interface Config8 {
  osarch: string;
  oslist: string;
  ownsdlc: string;
  realm: string;
}

export interface DescriptionLoc4 {
  english: string;
}

export interface N7 {
  arguments: string;
  config: Config9;
  description: string;
  description_loc: DescriptionLoc5;
  executable: string;
  type: string;
}

export interface Config9 {
  betakey: string;
  oslist: string;
  realm: string;
}

export interface DescriptionLoc5 {
  english: string;
}

export interface N8 {
  arguments: string;
  config: Config10;
  description: string;
  description_loc: DescriptionLoc6;
  executable: string;
}

export interface Config10 {
  osarch: string;
  oslist: string;
  realm: string;
}

export interface DescriptionLoc6 {
  english: string;
}

export interface N9 {
  arguments: string;
  config: Config11;
  description: string;
  description_loc: DescriptionLoc7;
  executable: string;
}

export interface Config11 {
  oslist: string;
  realm: string;
}

export interface DescriptionLoc7 {
  english: string;
}

export interface Signaturescheckedonlaunch {
  windows: Windows;
}

export interface Windows {
  "0": string;
}

export interface Signedfiles {
  "csgo.exe": string;
}

export interface SteamChinaOnly {
  steam_china_duration_control_show_interstitial: string;
  steam_china_enable_duration_control: string;
}

export interface Depots {
  "228988": N228988;
  "228990": N228990;
  "2347770": N2347770;
  "2347771": N2347771;
  "2347772": N2347772;
  "2347773": N2347773;
  "2347774": N2347774;
  "2347775": N2347775;
  "2347776": N2347776;
  "2347777": N2347777;
  "2347778": N2347778;
  "2347779": N2347779;
  "731": N731;
  "732": N732;
  "733": N733;
  "734": N734;
  "735": N735;
  "736": N736;
  "737": N737;
  "738": N738;
  appmanagesdlc: string;
  baselanguages: string;
  branches: Branches;
  depotdeltapatches: string;
  hasdepotsindlc: string;
  overridescddb: string;
  privatebranches: string;
  workshopdepot: string;
}

export interface N228988 {
  config: Config12;
  depotfromapp: string;
  sharedinstall: string;
}

export interface Config12 {
  oslist: string;
}

export interface N228990 {
  config: Config13;
  depotfromapp: string;
  sharedinstall: string;
}

export interface Config13 {
  oslist: string;
}

export interface N2347770 {
  config: Config14;
  manifests: Manifests;
}

export interface Config14 {
  osarch: string;
}

export interface Manifests {
  "1.40.8.1": N14081;
  "1.40.8.3": N14083;
  "1.40.8.4": N14084;
  public: Public;
}

export interface N14081 {
  download: string;
  gid: string;
  size: string;
}

export interface N14083 {
  download: string;
  gid: string;
  size: string;
}

export interface N14084 {
  download: string;
  gid: string;
  size: string;
}

export interface Public {
  download: string;
  gid: string;
  size: string;
}

export interface N2347771 {
  config: Config15;
  manifests: Manifests2;
}

export interface Config15 {
  oslist: string;
}

export interface Manifests2 {
  "1.40.8.1": N140812;
  "1.40.8.3": N140832;
  "1.40.8.4": N140842;
  public: Public2;
}

export interface N140812 {
  download: string;
  gid: string;
  size: string;
}

export interface N140832 {
  download: string;
  gid: string;
  size: string;
}

export interface N140842 {
  download: string;
  gid: string;
  size: string;
}

export interface Public2 {
  download: string;
  gid: string;
  size: string;
}

export interface N2347772 {
  config: Config16;
  manifests: Manifests3;
}

export interface Config16 {
  oslist: string;
}

export interface Manifests3 {
  "1.40.8.1": N140813;
  "1.40.8.3": N140833;
  "1.40.8.4": N140843;
  public: Public3;
}

export interface N140813 {
  download: string;
  gid: string;
  size: string;
}

export interface N140833 {
  download: string;
  gid: string;
  size: string;
}

export interface N140843 {
  download: string;
  gid: string;
  size: string;
}

export interface Public3 {
  download: string;
  gid: string;
  size: string;
}

export interface N2347773 {
  config: Config17;
  manifests: Manifests4;
}

export interface Config17 {
  osarch: string;
  oslist: string;
}

export interface Manifests4 {
  "1.40.8.1": N140814;
  "1.40.8.3": N140834;
  "1.40.8.4": N140844;
  public: Public4;
}

export interface N140814 {
  download: string;
  gid: string;
  size: string;
}

export interface N140834 {
  download: string;
  gid: string;
  size: string;
}

export interface N140844 {
  download: string;
  gid: string;
  size: string;
}

export interface Public4 {
  download: string;
  gid: string;
  size: string;
}

export interface N2347774 {
  config: Config18;
  manifests: Manifests5;
}

export interface Config18 {
  osarch: string;
}

export interface Manifests5 {
  "1.40.8.1": N140815;
  "1.40.8.3": N140835;
  "1.40.8.4": N140845;
  public: Public5;
}

export interface N140815 {
  download: string;
  gid: string;
  size: string;
}

export interface N140835 {
  download: string;
  gid: string;
  size: string;
}

export interface N140845 {
  download: string;
  gid: string;
  size: string;
}

export interface Public5 {
  download: string;
  gid: string;
  size: string;
}

export interface N2347775 {}

export interface N2347776 {}

export interface N2347777 {}

export interface N2347778 {}

export interface N2347779 {
  config: Config19;
  dlcappid: string;
  manifests: Manifests6;
}

export interface Config19 {
  optionaldlc: string;
  osarch: string;
}

export interface Manifests6 {
  "1.40.8.1": N140816;
  "1.40.8.3": N140836;
  "1.40.8.4": N140846;
  public: Public6;
}

export interface N140816 {
  download: string;
  gid: string;
  size: string;
}

export interface N140836 {
  download: string;
  gid: string;
  size: string;
}

export interface N140846 {
  download: string;
  gid: string;
  size: string;
}

export interface Public6 {
  download: string;
  gid: string;
  size: string;
}

export interface N731 {
  manifests: Manifests7;
  systemdefined: string;
}

export interface Manifests7 {
  "1.40.8.1": N140817;
  "1.40.8.3": N140837;
  "1.40.8.4": N140847;
  csgo_legacy: CsgoLegacy;
  demo_viewer: DemoViewer;
  public: Public7;
}

export interface N140817 {
  download: string;
  gid: string;
  size: string;
}

export interface N140837 {
  download: string;
  gid: string;
  size: string;
}

export interface N140847 {
  download: string;
  gid: string;
  size: string;
}

export interface CsgoLegacy {
  download: string;
  gid: string;
  size: string;
}

export interface DemoViewer {
  download: string;
  gid: string;
  size: string;
}

export interface Public7 {
  download: string;
  gid: string;
  size: string;
}

export interface N732 {
  config: Config20;
  manifests: Manifests8;
  systemdefined: string;
}

export interface Config20 {
  oslist: string;
}

export interface Manifests8 {
  "1.40.8.1": N140818;
  "1.40.8.3": N140838;
  "1.40.8.4": N140848;
  csgo_legacy: CsgoLegacy2;
  demo_viewer: DemoViewer2;
  public: Public8;
}

export interface N140818 {
  download: string;
  gid: string;
  size: string;
}

export interface N140838 {
  download: string;
  gid: string;
  size: string;
}

export interface N140848 {
  download: string;
  gid: string;
  size: string;
}

export interface CsgoLegacy2 {
  download: string;
  gid: string;
  size: string;
}

export interface DemoViewer2 {
  download: string;
  gid: string;
  size: string;
}

export interface Public8 {
  download: string;
  gid: string;
  size: string;
}

export interface N733 {
  config: Config21;
  manifests: Manifests9;
  systemdefined: string;
}

export interface Config21 {
  oslist: string;
}

export interface Manifests9 {
  "1.40.8.1": N140819;
  "1.40.8.3": N140839;
  "1.40.8.4": N140849;
  csgo_legacy: CsgoLegacy3;
  demo_viewer: DemoViewer3;
  public: Public9;
}

export interface N140819 {
  download: string;
  gid: string;
  size: string;
}

export interface N140839 {
  download: string;
  gid: string;
  size: string;
}

export interface N140849 {
  download: string;
  gid: string;
  size: string;
}

export interface CsgoLegacy3 {
  download: string;
  gid: string;
  size: string;
}

export interface DemoViewer3 {
  download: string;
  gid: string;
  size: string;
}

export interface Public9 {
  download: string;
  gid: string;
  size: string;
}

export interface N734 {
  config: Config22;
  manifests: Manifests10;
}

export interface Config22 {
  oslist: string;
}

export interface Manifests10 {
  "1.40.8.1": N1408110;
  "1.40.8.3": N1408310;
  "1.40.8.4": N1408410;
  csgo_legacy: CsgoLegacy4;
  public: Public10;
}

export interface N1408110 {
  download: string;
  gid: string;
  size: string;
}

export interface N1408310 {
  download: string;
  gid: string;
  size: string;
}

export interface N1408410 {
  download: string;
  gid: string;
  size: string;
}

export interface CsgoLegacy4 {
  download: string;
  gid: string;
  size: string;
}

export interface Public10 {
  download: string;
  gid: string;
  size: string;
}

export interface N735 {
  manifests: Manifests11;
}

export interface Manifests11 {
  "1.40.8.1": N1408111;
  "1.40.8.3": N1408311;
  "1.40.8.4": N1408411;
  csgo_legacy: CsgoLegacy5;
  public: Public11;
}

export interface N1408111 {
  download: string;
  gid: string;
  size: string;
}

export interface N1408311 {
  download: string;
  gid: string;
  size: string;
}

export interface N1408411 {
  download: string;
  gid: string;
  size: string;
}

export interface CsgoLegacy5 {
  download: string;
  gid: string;
  size: string;
}

export interface Public11 {
  download: string;
  gid: string;
  size: string;
}

export interface N736 {
  manifests: Manifests12;
}

export interface Manifests12 {
  "1.40.8.1": N1408112;
  "1.40.8.3": N1408312;
  "1.40.8.4": N1408412;
  csgo_legacy: CsgoLegacy6;
  public: Public12;
}

export interface N1408112 {
  download: string;
  gid: string;
  size: string;
}

export interface N1408312 {
  download: string;
  gid: string;
  size: string;
}

export interface N1408412 {
  download: string;
  gid: string;
  size: string;
}

export interface CsgoLegacy6 {
  download: string;
  gid: string;
  size: string;
}

export interface Public12 {
  download: string;
  gid: string;
  size: string;
}

export interface N737 {
  manifests: Manifests13;
}

export interface Manifests13 {
  "1.40.8.1": N1408113;
  "1.40.8.3": N1408313;
  "1.40.8.4": N1408413;
  csgo_legacy: CsgoLegacy7;
  public: Public13;
}

export interface N1408113 {
  download: string;
  gid: string;
  size: string;
}

export interface N1408313 {
  download: string;
  gid: string;
  size: string;
}

export interface N1408413 {
  download: string;
  gid: string;
  size: string;
}

export interface CsgoLegacy7 {
  download: string;
  gid: string;
  size: string;
}

export interface Public13 {
  download: string;
  gid: string;
  size: string;
}

export interface N738 {
  manifests: Manifests14;
}

export interface Manifests14 {
  "1.40.8.1": N1408114;
  "1.40.8.3": N1408314;
  "1.40.8.4": N1408414;
  csgo_legacy: CsgoLegacy8;
  public: Public14;
}

export interface N1408114 {
  download: string;
  gid: string;
  size: string;
}

export interface N1408314 {
  download: string;
  gid: string;
  size: string;
}

export interface N1408414 {
  download: string;
  gid: string;
  size: string;
}

export interface CsgoLegacy8 {
  download: string;
  gid: string;
  size: string;
}

export interface Public14 {
  download: string;
  gid: string;
  size: string;
}

export interface Branches {
  "1.40.8.1": N1408115;
  "1.40.8.3": N1408315;
  "1.40.8.4": N1408415;
  csgo_legacy: CsgoLegacy9;
  demo_viewer: DemoViewer4;
  public: Public15;
}

export interface N1408115 {
  buildid: string;
  description: string;
  timeupdated: string;
}

export interface N1408315 {
  buildid: string;
  description: string;
  timeupdated: string;
}

export interface N1408415 {
  buildid: string;
  description: string;
  timeupdated: string;
}

export interface CsgoLegacy9 {
  buildid: string;
  description: string;
  timeupdated: string;
}

export interface DemoViewer4 {
  buildid: string;
  description: string;
}

export interface Public15 {
  buildid: string;
  timeupdated: string;
}

export interface Extended {
  aliases: string;
  developer: string;
  dlcavailableonstore: string;
  gamedir: string;
  homepage: string;
  icon: string;
  isfreeapp: string;
  languages_macos: string;
  listofdlc: string;
  loadallbeforelaunch: string;
  minclientversion: string;
  minclientversion_pw_csgo: string;
  noservers: string;
  primarycache: string;
  primarycache_macos: string;
  publisher: string;
  serverbrowsername: string;
  state: string;
  vacmacmodulecache: string;
  vacmodulecache: string;
  vacmodulefilename: string;
  validoslist: string;
}

export interface Install {
  registry: Registry;
  utf8_registry_strings: string;
}

export interface Registry {
  "hkey_local_machinesoftware\valvecs2": HkeyLocalMachineSoftwareValveCs2;
}

export interface HkeyLocalMachineSoftwareValveCs2 {
  string: String;
}

export interface String {
  installpath: string;
}

export interface Ufs {
  maxnumfiles: string;
  quota: string;
}
