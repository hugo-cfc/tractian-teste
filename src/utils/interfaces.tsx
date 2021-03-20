export interface DataUsers {
  id?: number;
  email?: string;
  name?: string;
  unitId?: number;
  companyId?: number;
  companyName?: string;
  unitName?: string;
}

export interface Companies {
  id: number;
  name: string;
}

export interface Units extends Companies {
  companyId: number;
}

export interface MetricsAssets {
  totalCollectsUptime?: number;
  totalUptime?: number;
  lastUptimeAt?: string;
}

export interface EspecificationsAssets {
  maxTemp?: number;
  power?: number;
  rpm?: number;
}

export interface Assets {
  id?: number;
  sensors: string[];
  status?: string;
  healthscore?: number;
  model?: string;
  name?: string;
  image?: string;
  metrics?: MetricsAssets;
  specifications?: EspecificationsAssets;
  unitId?: number;
  companyId?: number;
  unitName?: string;
  companyName?: string;
}

export interface ContextProps extends DataUsers {
  authenticated: boolean;
  dataUsers: Array<DataUsers>;
  handleLogin(e: any): void;
  handleLogout(e: any): void;
  handleInputChange(e: any): void;
  currentUser: DataUsers;
  companies: Array<Companies>;
  units: Array<Units>;
  avatarName: string;
  assets: Array<Assets>;
  assetsUnit1: Array<Assets>;
  assetsUnit2: any;
  assetsUnitCurrent: any;
  usersUnit1: any;
  usersUnit2: any;
}
