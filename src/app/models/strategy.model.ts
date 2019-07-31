export class Strategy {
  id: number;
  name: string;
  type: string;
  status: string;
  ticker: string;
  quantity: number;
  limits: number;
  stop: number;
  currentPosition: string;
  fastAvgIntervale: number;
  shortBelow: boolean;
  slowAvgIntervale: number;
}
