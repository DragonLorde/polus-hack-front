export const config: any = {
  cars: [
    {
      value: 'aerial_platform',
      label: 'Парк автовышек',
    },
    {
      value: 'cran',
      label: 'Парк кранов',
    },
    {
      value: 'gruz',
      label: 'Парк погрузчиков',
    },
  ],
  carsType: {
    aerial_platform: [
      {
        value: 0,
        label: 'Автовышка (28 м)',
      },
      {
        value: 1,
        label: 'Автовышка (35 м)',
      },
      {
        value: 2,
        label: 'Автовышка (70 м)',
      },
    ],
    cran: [
      {
        value: 0,
        label: 'Кран 100 т.',
      },
      {
        value: 1,
        label: 'Кран 16 т.',
      },
      {
        value: 2,
        label: 'Кран 25 т.',
      },
    ],
    gruz: [
      {
        value: 0,
        label: 'Погрузчик_Вилочный',
      },
      {
        value: 1,
        label: 'Погрузчик_Вилочный_Диз_3т/6м',
      },
      {
        value: 2,
        label: 'Погрузчик_Ричтрак_контейнерный',
      },
    ],
  },
  carsTypeTech: {
    aerial_platform: [
      {
        value: 'Чайка Сервис 2784SG',
        label: 'А095АА/999',
      },
      {
        value: 'КАМАЗ 43114',
        label: 'А111АА/999',
      },
      {
        value: 'Чайка Сервис 5784ХР',
        label: 'А118АА/999',
      },
    ],
    cran: [
      {
        value: 'А306АА/999',
        label: 'LIEBHERR LTM 1100-4.1',
      },
      {
        value: 'КС-35714К-2',
        label: 'А310АА/999',
      },
      {
        value: 'КС-45717К-3(25т.)',
        label: 'А319АА/999',
      },
    ],
    gruz: [
      {
        value: 'KOMATSU FD30T-17',
        label: 'А592АА/999',
      },
      {
        value: 'KOMATSU FD30T-17',
        label: 'А599АА/999',
      },
      {
        value: 'Bobcat T2250',
        label: 'А617АА/999',
      },
    ],
  },

}
