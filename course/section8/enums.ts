/*
Enums allow us to define a set of named constants. We can give these constants numeric or string values.
Enums are useful when we have a set of related constants that we want to use in our code.
**/ 


// instead of using 'type' we can use 'enum' to define a set of named constants.

enum Responses {
  yes,
  no,
  maybe,
}


// test
const firstResponse: Responses = Responses.yes;

//

// with a function

enum DeliveryStatus { 
  PENDING,
  SHIPPED,
  DELIVERED,
  CANCELLED,
}


// the param in the function is the given the placeholer of status, and this is given the type of DeliveryStatus
function whereIsMyParcel(status: DeliveryStatus) : string{
  switch(status){
    case DeliveryStatus.PENDING:
      return 'Your parcel is pending';
    case DeliveryStatus.SHIPPED:
      return 'Your parcel is shipped';
    case DeliveryStatus.DELIVERED:
      return 'Your parcel is delivered';
    case DeliveryStatus.CANCELLED:
      return 'Your parcel is cancelled';
  }
}



function whereIsMyParcelDynamic(status: DeliveryStatus) : string{
  return DeliveryStatus[status]
}

whereIsMyParcelDynamic(DeliveryStatus.PENDING);