// Date countdown timer

function countdownTimer(targetDate) {
    const now = new Date();
    const timeRemaining = targetDate - now;
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    
    return `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}

// Age calculation simple 

function calculateAge(birthdate) {
    const now = new Date();
    const birth = new Date(birthdate);
    const age = now.getFullYear() - birth.getFullYear();
    
    if (now.getMonth() < birth.getMonth() || (now.getMonth() === birth.getMonth() && now.getDate() < birth.getDate())) {
        return age - 1;
    }
    return age;
}


