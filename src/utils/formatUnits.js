export const formatPersistence = (persistence) => {
  return new Intl.NumberFormat("en-US", { style: "percent" }).format(
    persistence
  );
};

export const formatPrice = (price) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
};
