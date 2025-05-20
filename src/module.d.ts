interface TestingCharacter {
  id?: number;
  name: string;
  color: string;
  bodyImage: string;
  charDesc: string;
    specialty:string[]
  birthday:string
  hobbies:string[]
}
type GroupShortNames = "leo" | "mmj" | "vbs" | "wxs" | "25j";
interface CharProps {
imageColor:string;
  specialty:string[]
  birthday:string
  hobbies:string[]
  name: string;
  icon: string;
  desc: string;
  bodyImg: string;
}
interface GroupProps {
  iconGroup: string;
  group: GroupShortNames;
  groupDesc: string;
  color: string;
  char: CharProps[];
}