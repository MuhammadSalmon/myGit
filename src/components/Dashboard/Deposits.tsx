import { Typography, Button, Skeleton } from '@mui/material';

interface DepositsProps {
  totalAmount?: number;
  lastUpdated?: Date;
  loading?: boolean;
  onViewBalance?: () => void;
}

const Deposits: React.FC<DepositsProps> = ({ 
  totalAmount = 3024.00, 
  lastUpdated = new Date('2023-03-15'), 
  loading = false,
  onViewBalance 
}) => {
  const formattedDate = lastUpdated.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Recent Deposits
      </Typography>
      
      {loading ? (
        <Skeleton variant="text" width={150} height={40} />
      ) : (
        <Typography component="p" variant="h4">
          ${totalAmount.toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          })}
        </Typography>
      )}
      
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on {loading ? <Skeleton variant="text" width={100} /> : formattedDate}
      </Typography>
      
      <div>
        <Button 
          color="primary" 
          variant="contained" 
          sx={{ mt: 2 }}
          onClick={onViewBalance}
          disabled={loading}
        >
          {loading ? 'Loading...' : 'View balance'}
        </Button>
      </div>
    </>
  );
};

export default Deposits;