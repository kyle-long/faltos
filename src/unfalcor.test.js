const unfalcor = require('./unfalcor');
const data1 = require('../data/test1.json');

describe('unfalcor', () => {
    it('properly trims down a data structure', () => {
        const expected = {
            "test": {
                "list": [
                    {
                        "thing": "hello",
                        "thing2": "thing2_hello",
                        "thing3": null
                    },
                    {
                        "thing": "hello_1",
                        "thing2": "thing2_hello_1"
                    }
                ]
            },
            "object": {
                "obj1": "obj1",
                "obj2": "obj2"
            },
            "nested": [
                {
                    "obj": {
                        "someArray": [
                            {
                                "someNestedProp": {
                                    "prop": "hurray"
                                }
                            }
                        ]
                    }
                }
            ]
        };

        expect(unfalcor(data1)).toEqual(expected);
    });
});
