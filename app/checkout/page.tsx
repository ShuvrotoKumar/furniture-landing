'use client';

import { useCart } from '../context/CartContext';
import { Button, Input, Form, message, Table, Space, Typography } from 'antd';
import { ShoppingCartOutlined, ArrowLeftOutlined, CreditCardOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { useState } from 'react';

const { Title, Text } = Typography;

const CheckoutPage = () => {
  const { cart, removeFromCart, updateQuantity, totalItems, totalPrice } = useCart();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const columns = [
    {
      title: 'Product',
      dataIndex: 'name',
      key: 'name',
      render: (_: any, record: any) => (
        <div className="flex items-center">
          <img 
            src={record.image} 
            alt={record.name} 
            className="w-16 h-16 object-cover rounded-md mr-4"
          />
          <div>
            <div className="font-medium">{record.name}</div>
            <div className="text-gray-500 text-sm">${parseFloat(record.price.replace('$', '')).toFixed(2)}</div>
          </div>
        </div>
      ),
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (price: string) => <span>{price}</span>,
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
      render: (quantity: number, record: any) => (
        <Input
          type="number"
          min={1}
          value={quantity}
          onChange={(e) => updateQuantity(record.id, parseInt(e.target.value) || 1)}
          className="w-20"
        />
      ),
    },
    {
      title: 'Total',
      key: 'total',
      render: (_: any, record: any) => (
        <span>${(parseFloat(record.price.replace('$', '')) * record.quantity).toFixed(2)}</span>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_: any, record: any) => (
        <Button 
          type="text" 
          danger 
          onClick={() => removeFromCart(record.id)}
        >
          Remove
        </Button>
      ),
    },
  ];

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      message.success('Order placed successfully!');
      // Here you would typically clear the cart and redirect to order confirmation
    } catch (error) {
      message.error('Failed to place order. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-6">
        <ShoppingCartOutlined className="text-6xl text-gray-300 mb-4" />
        <Title level={3} className="mb-2">Your cart is empty</Title>
        <Text type="secondary" className="mb-6 block">
          Looks like you haven't added anything to your cart yet.
        </Text>
        <Link href="/">
          <Button type="primary" size="large">
            Continue Shopping
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/">
          <Button type="text" icon={<ArrowLeftOutlined />} className="mb-4">
            Back to Shop
          </Button>
        </Link>
        <Title level={2} className="mb-2 mt-12">Checkout</Title>
        <Text type="secondary">Review your order and complete your purchase</Text>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <Title level={4} className="mb-6">Order Summary</Title>
            <Table
              columns={columns}
              dataSource={cart}
              rowKey="id"
              pagination={false}
              className="w-full"
            />
          </div>
        </div>

        <div>
          <div className="bg-white rounded-lg shadow-sm p-6 sticky top-6">
            <Title level={4} className="mb-6">Order Total</Title>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <Text>Subtotal ({totalItems} {totalItems === 1 ? 'item' : 'items'})</Text>
                <Text>${totalPrice.toFixed(2)}</Text>
              </div>
              <div className="flex justify-between">
                <Text>Shipping</Text>
                <Text>Free</Text>
              </div>
              <div className="border-t border-gray-200 pt-4 mt-2">
                <div className="flex justify-between font-semibold text-lg">
                  <Text>Total</Text>
                  <Text>${totalPrice.toFixed(2)}</Text>
                </div>
              </div>
            </div>

            <Form form={form} onFinish={onFinish} layout="vertical">
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  { required: true, message: 'Please enter your email' },
                  { type: 'email', message: 'Please enter a valid email' },
                ]}
              >
                <Input size="large" placeholder="your@email.com" />
              </Form.Item>

              <Form.Item
                name="cardNumber"
                label="Card Number"
                rules={[{ required: true, message: 'Please enter your card number' }]}
              >
                <Input size="large" placeholder="1234 1234 1234 1234" />
              </Form.Item>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <Form.Item
                  name="expiry"
                  label="Expiry Date"
                  rules={[{ required: true, message: 'MM/YY' }]}
                >
                  <Input size="large" placeholder="MM/YY" />
                </Form.Item>
                <Form.Item
                  name="cvc"
                  label="CVC"
                  rules={[{ required: true, message: 'CVC' }]}
                >
                  <Input size="large" placeholder="CVC" />
                </Form.Item>
              </div>

              <Button
                type="primary"
                size="large"
                htmlType="submit"
                loading={loading}
                icon={<CreditCardOutlined />}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                Pay ${totalPrice.toFixed(2)}
              </Button>
            </Form>
          </div>
          
          <div className="mt-4 text-center text-sm text-gray-500">
            <p>By completing your purchase, you agree to our Terms of Service and Privacy Policy.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
