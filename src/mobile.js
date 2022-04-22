//SmartPhone
class SmartPhone{
  constructor(ram, batteryPower, price){
    this.ram = ram;
    this.batteryPower = batteryPower;
    this.price = price;
  }

  displayFeatures(){
    return this.ram + '\n' + this.batteryPower + '\n' + this.price;
  }

  remainingAmount(priceIHave){
    this.price = this.price - priceIHave;
  }
}
// AndroidPhone
class AndroidPhone extends SmartPhone{
  constructor(modelName, ram, batteryPower, price){
    super(ram, batteryPower, price);
    this.modelName = modelName;
  }

  displayFeatures(){
    return this.modelName + '\n' + this.ram + '\n' + this.batteryPower + '\n' + this.price;
  }

  remainingAmount(priceIHave){
    let p = priceIHave - this.price;

    if(p == 0){
      return "Customer has no more amount";
    }
    else if(p < 0){
      return "Customer can't able to buy a phone due to insufficient amount";
    }
    else{
      this.price = p;
      return 'Customer has remaining Rs.' + p + ' after buying the android phone';
    }
  }
}
// IPhone
class IPhone extends SmartPhone{
  constructor(seriesName, ram, batteryPower, price){
    super(ram, batteryPower, price);
    this.seriesName = seriesName;
  }

  displayFeatures(){
    return this.seriesName + '\n' + this.ram + '\n' + this.batteryPower + '\n' + this.price;
  }

  remainingAmount(priceIHave){
    let p = priceIHave - this.price;

    if(p == 0){
      return "Customer has no more amount";
    }
    else if(p < 0){
      return "Customer can't able to buy a phone due to insufficient amount";
    }
    else{
      this.price = p;
      return 'Customer has remaining Rs.' + p + ' after buying an iphone';
    }
  }
}
//MobileCampus
class MobileCampus{
  constructor(NoOfMobiles, NoOfAndroidMobiles, NoOfIPhoneMobiles){
    this.NoOfMobiles = NoOfMobiles;
    this.NoOfAndroidMobiles = NoOfAndroidMobiles;
    this.NoOfIPhoneMobiles = NoOfIPhoneMobiles;
  }

  changeMobileAvailabilityNumber(count, type){
    this.NoOfMobiles = this.NoOfMobiles - count;

    if(type === 'android'){
      this.NoOfAndroidMobiles = this.NoOfAndroidMobiles - count;
      return 'Available android mobiles are ' + this.NoOfAndroidMobiles;
    }
    else if(type === 'iphone'){
      this.NoOfIPhoneMobiles = this.NoOfIPhoneMobiles - count;
      return 'Available iphone mobiles are ' + this.NoOfIPhoneMobiles;
    }
  }
}
