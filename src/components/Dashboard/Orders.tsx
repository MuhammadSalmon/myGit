import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Skeleton,
} from '@mui/material';

export interface Order {
  id: number;
  date: string;
  name: string;
  shipTo: string;
  paymentMethod: string;
  amount: string;
}

interface OrdersProps {
  orders?: Order[];
  loading?: boolean;
}

const Orders: React.FC<OrdersProps> = ({ 
  orders = [], 
  loading = false 
}) => {
  // Default data if no orders provided
  const defaultOrders: Order[] = [
    {
      id: 1,
      date: '16 Mar, 2023',
      name: 'Elvis Presley',
      shipTo: 'Tupelo, MS',
      paymentMethod: 'VISA ⠀•••• 3719',
      amount: '$312.44'
    },
    // ... other default orders
  ];

  const displayedOrders = orders.length > 0 ? orders : defaultOrders;

  return (
    <>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Recent Orders
      </Typography>
      
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Ship To</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {loading ? (
            // Show skeletons when loading
            Array(5).fill(0).map((_, index) => (
              <TableRow key={`skeleton-${index}`}>
                <TableCell><Skeleton variant="text" /></TableCell>
                <TableCell><Skeleton variant="text" /></TableCell>
                <TableCell><Skeleton variant="text" /></TableCell>
                <TableCell><Skeleton variant="text" /></TableCell>
                <TableCell align="right"><Skeleton variant="text" /></TableCell>
              </TableRow>
            ))
          ) : (
            // Show actual data when loaded
            displayedOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.date}</TableCell>
                <TableCell>{order.name}</TableCell>
                <TableCell>{order.shipTo}</TableCell>
                <TableCell>{order.paymentMethod}</TableCell>
                <TableCell align="right">{order.amount}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </>
  );
};

export default Orders;