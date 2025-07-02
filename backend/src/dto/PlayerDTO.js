class PlayerDTO {
    constructor(firstName, lastName, isGuard, isForward, isCenter, clubId) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.isGuard = isGuard;
        this.isForward = isForward;
        this.isCenter = isCenter;
        this.clubId = clubId;
    }
}

export default PlayerDTO; 