import {Deserializable} from './deserializable.model';

export class Strategy {
  id: number;
  name: string;
  type: string;
  status: string;
  ticker: string;
  quantity: number;
  limit: number;
  stop: number;
  position: string;

  deserialize(input: any): this {
    return Object.assign(this, input);
  }
}
