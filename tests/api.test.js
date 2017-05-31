import test from 'ava';
import { Converter } from '../dist/index';

test('converter', t => {
    const converter = new Converter();

    // data
    const link = 'https://www.amazon.de/gp/aw/d/B00XXJ52DK/ref=mp_s_a_1_3?__mk_de_DE=%C3%85M%C3%85Z%C3%95%C3%91&qid=1496223172&sr=8-3&pi=AC_SX236_SY340_QL65&keywords=laptone+trinkflasche&dpPl=1&dpID=5192iB-AClL&ref=plSrch&th=1&psc=1';
    const expected = 'https://www.amazon.de/dp/B00XXJ52DK/ref=mp_s_a_1_3?__mk_de_DE=%C3%85M%C3%85Z%C3%95%C3%91&qid=1496223172&sr=8-3&pi=AC_SX236_SY340_QL65&keywords=laptone+trinkflasche&dpPl=1&dpID=5192iB-AClL&ref=plSrch&th=1&psc=1';

    t.is(converter.convert(link), expected);
});
