import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Order extends Document {
  @Prop({ type: Types.ObjectId, ref: 'User' })
  user: Types.ObjectId;

  @Prop([{
    product: { type: Types.ObjectId, ref: 'Product' },
    quantity: Number,
  }])
  items: {
    product: Types.ObjectId;
    quantity: number;
  }[];

  @Prop({ required: true })
  total: number;

  @Prop({ default: 'Pending' })
  status: 'Pending' | 'Completed' | 'Cancelled';
}

export const OrderSchema = SchemaFactory.createForClass(Order);
