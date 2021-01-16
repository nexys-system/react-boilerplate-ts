export enum AssetClass {
  Cash,
  Stocks,
  Crypto,
  ETF
}

export enum Platform {
  FlowBank,
  Bitstamp,
  TrueWealth,
  UBS,
  Swissquote
}

export interface PortfolioLine {
  label: string;
  assetClass: AssetClass;
  amount?: number;
  value: number;
  date: Date;
  location: Platform;
}

export const data: PortfolioLine[] = [
  {
    label: 'ABBN',
    assetClass: AssetClass.Stocks,
    amount: 4,
    value: 26.44,
    date: new Date(2021, 0, 15),
    location: Platform.FlowBank
  },
  {
    label: 'AMS',
    assetClass: AssetClass.Stocks,
    amount: 4,
    value: 21.74,
    date: new Date(2021, 0, 15),
    location: Platform.FlowBank
  },
  {
    label: 'NOVN',
    assetClass: AssetClass.Stocks,
    amount: 1,
    value: 85.6,
    date: new Date(2021, 0, 15),
    location: Platform.FlowBank
  },
  {
    label: 'LONZ',
    assetClass: AssetClass.Stocks,
    amount: 1,
    value: 585.6,
    date: new Date(2021, 0, 15),
    location: Platform.FlowBank
  },
  {
    label: 'CHF',
    assetClass: AssetClass.Cash,
    amount: 56.08,
    value: 1,
    date: new Date(2021, 0, 15),
    location: Platform.FlowBank
  }
];
