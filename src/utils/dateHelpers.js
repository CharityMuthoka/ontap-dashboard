export const getNextPayday = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
  
    // Payday is the 1st of each month
    let nextPayday = new Date(year, month, 1);
  
    // If today is after the 1st, move to next month
    if (today.getDate() > 1) {
      nextPayday = new Date(year, month + 1, 1);
    }
  
    return nextPayday.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };
  