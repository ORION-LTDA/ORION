import { Entity } from '../../core/entities/entity';
import { Optional } from '../../core/types/optional';

type ShirtProps = {
  code: string;
  size: string;
  color: string;
  price: number;
  image: string;
  status?: boolean | null;
};

export class Shirt extends Entity<ShirtProps> {
  public static create(props: Optional<ShirtProps, 'status'>, id?: string) {
    const shirt = new Shirt(
      {
        ...props,
        status: true,
      },
      id,
    );

    return shirt;
  }

  get code(): string {
    return this.props.code;
  }
  get size(): string {
    return this.props.size;
  }
  get color(): string {
    return this.props.color;
  }
  get price(): number {
    return this.props.price;
  }
  get image(): string {
    return this.props.image;
  }
  get status(): boolean | undefined | null {
    return this.props.status;
  }

  set code(code: string) {
    this.props.code = code;
  }
  set size(size: string) {
    this.props.size = size;
  }
  set color(color: string) {
    this.props.color = color;
  }
  set price(price: number) {
    this.props.price = price;
  }
  set image(image: string) {
    this.props.image = image;
  }
  set status(status: boolean | undefined) {
    this.props.status = status;
  }
}
