interface TestingCharacter {
  id?: number;
  name: string;
  color: string;
  bodyImage: string;
  charDesc: string;
    specialty:string[]
  birthday:string
  hobbies:string[]
  longDesc:string
  stamps?:StampProps[]
}
type GroupShortNames = "leo" | "mmj" | "vbs" | "wxs" | "25j";
interface StampProps{
  url:string;
  top?:number;
    right?:number;
      bottom?:number;
        left?:number;
        zIndex?:number;

}
interface CharProps {
imageColor:string;
  specialty:string[]
  birthday:string
  hobbies:string[]
  name: string;
  icon: string;
  desc: string;
  longDesc: string;
  bodyImg: string;
  stamps?:StampProps[]
}
interface GroupProps {
  iconGroup: string;
  group: GroupShortNames;
  groupDesc: string;
  color: string;
  char: CharProps[];
}