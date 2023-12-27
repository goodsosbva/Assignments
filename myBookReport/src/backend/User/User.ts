import { getFetchData } from "./api";

interface Users {
    idx: number,
    id: string,
    password: string,
}

// 회원 가입
export const isPossibleJoin = async (id: string) => {
    // db 조회 (가상)
    const UserData = await getFetchData("users");
    const AllUser = UserData.UserData;

    console.log("id >>> ", id.length)

    // 비어 있는지 확인
    if (id.length === 0) return false

    // 중복 여부 확인
    const isDuplicate = AllUser.some((user: Users) => user.id === id);
    
    return isDuplicate === false ? true : false 
}