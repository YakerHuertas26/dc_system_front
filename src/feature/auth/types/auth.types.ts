export interface authInputs {
    name: string,
    password: string
};
export type RoleName =
    | 'Admin'
    | 'Supervisor'
    | 'Vendedor'

export interface authUser {
    userId: number,
    name: string,
    email: string,
    state: number,
    role: {
        roleId: number,
        name: RoleName
    },
    roleId: number
}

export interface authResponse {
    userAutorised: authUser,
    accessToken: string
}

export interface jwtPayload {
    sub: number
    name: string
    roleName: RoleName
    roleId: number
    exp: number
    iat: number
}

