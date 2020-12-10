import { Component, OnInit } from '@angular/core';
import * as faker from 'faker';

@Component({
  selector: 'app-faker-test',
  templateUrl: './faker-test.component.html',
  styleUrls: ['./faker-test.component.css']
})
export class FakerTestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public createColumnConfigDto(seed: number) {
    faker.seed(seed);
    return {
      name: faker.lorem.words(3),
      prop: faker.lorem.word(),
      sortable: faker.random.boolean(),
      editable: faker.random.boolean(),
      type: 'number',
    }
  }

  public a() {
    // const rnd = Math.random();
    // console.log(rnd);
    // faker.seed(rnd);
    // console.log(faker.lorem.words(3));
    console.log(this.createColumnConfigDto(1));
    console.log(this.createColumnConfigDto(2));
    console.log(faker.random.uuid());
    faker.seed(1);
    console.log(faker.lorem.words(3));
    faker.seed(2);
    console.log(faker.lorem.words(3));
  }

  public b() {
    enum Enum {
      a = 1,
      b = 'string1',
      string2 = 'string2',
      String3 = 'string3',
      string_in_key = 2
    }
    console.log(Enum);

    console.log('======1 in Enum======');
    console.log(1 in Enum);

    console.log('======"string1" in Enum======');
    console.log('string1' in Enum)

    console.log('======Object.values(Enum).includes("string1")======');
    console.log(Object.values(Enum).includes('string1'));

    console.log('======"string2" in Enum======');
    console.log('string2' in Enum);

    console.log('======"string3" in Enum======');
    console.log('string3' in Enum);
  }

}
