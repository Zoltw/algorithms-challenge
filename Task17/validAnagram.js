const isAnagram = (s, t) => {
    const first = s.split('').sort().join('');
    const second = t.split('').sort().join('');

    return first === second;
};