export /**
 * Item
 */
class Item {
    id: number;
    part_no: string;
    name: string;
    unit: string;
    price:number;
    gst:number
    constructor(){
        this.id=null;
        this.part_no="";
        this.name="";
        this.unit="";
        this.price=0;
        this.gst=0;
    }
}