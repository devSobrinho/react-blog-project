export const formatDate = (dateString: string): string => {
  const date = new Date(dateString).toLocaleDateString('pt-BR', {
    dateStyle: 'medium',
  });
  return date;
};
