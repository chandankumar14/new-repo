export interface student_Model {
    id: number
    name: string
    role: string
    experience: string
    email: string
    address: [
        {
            current_Address: string
        }
    ]

}

export interface Time {
    remainingTime:number
}