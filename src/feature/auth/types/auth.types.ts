export interface authInputs {
    name: string,
    password: string
};

export interface authUser {
    userId: number,
    name: string,
    email: string,
    state: number,
    role: {
        roleId: number,
        name: string
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
    roleName: string  // "Admin", "Manager", "User" → según tu RolesGuard
    roleId: number
    exp: number
    iat: number
}

