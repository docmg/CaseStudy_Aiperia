CREATE VIEW Metrics
AS
SELECT
    d.targetDate,
    d.storeId,
    d.productId,
    d.quantity AS deliveredQuantity,
    d. "value" AS deliveredValue,
    r.quantity AS recommendedQuantity,
    r. "value" AS recommendedValue,
    s.salesQuantity,
    s.salesValue,
    s.demandQuantity,
    s.demandValue
FROM
    Delivery d
    INNER JOIN Recommendation r ON d.productId = r.productId
        AND d.storeId = r.storeId
        AND d.targetDate = r.targetDate
    INNER JOIN Sale s ON d.productId = s.productId
        AND d.storeId = s.storeId
        AND d.targetDate = s.targetDate;
