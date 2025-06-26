class Player {
    constructor(id, firstName, lastName, isGuard, isForward, isCenter, averagePir) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.isGuard = isGuard;
        this.isForward = isForward;
        this.isCenter = isCenter;
        this.averagePir = averagePir;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    getPositions() {
        const positions = [];
        if (this.isGuard) positions.push('G');
        if (this.isForward) positions.push('F');
        if (this.isCenter) positions.push('C');
        return positions.join('/');
    }
}

export default Player; 