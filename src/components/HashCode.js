function hashCode (target) {
	let hash = 0;

    if (target.length === 0) return hash;
	
    for (let i = 0; i < target.length; i++) {
        const char = target.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash.toString();
};

export default hashCode;