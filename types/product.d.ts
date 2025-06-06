export interface IProduct {
  id: string | number;

  localizeInfos: { title: string };

  price: number;

  attributeValues: {
    p_image: { value: { downloadLink: string } };
    p_price: {value : number};
    p_title: { value: string };
    p_description: {
      value: { htmlValue: string}[]
    }
  };
}