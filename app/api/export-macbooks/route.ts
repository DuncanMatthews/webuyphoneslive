import { writeFile } from 'fs';
import { utils, write } from 'xlsx';

const macbookData = {
  'Macbook Air': {
    screenSizes: ['11', '13'],
    releaseDates: {
      '11': ['Mid 2013', 'Early 2014', 'Early 2015'],
      '13': [
        'Mid 2012',
        'Mid 2013',
        'Early 2014',
        'Early 2015',
        '2017',
        '2018',
        '2019',
        '2020',
        '2021',
        '2022'
      ]
    },
    processors: {
      '11': {
        'Mid 2013': ['1.3 GHz dual-core i5', '1.7 GHz dual-core i7'],
        'Early 2014': ['1.4 GHz dual-core i5'],
        'Early 2015': ['1.6 GHz dual-core i5', '2.2 GHz dual-core i7']
      },
      '13': {
        'Mid 2012': ['1.8 GHz dual-core i5', '2.0 GHz dual-core i7'],
        'Mid 2013': ['1.3 GHz dual-core i5', '1.7 GHz dual-core i7'],
        'Early 2014': ['1.4 GHz dual-core i5'],
        'Early 2015': ['1.6 GHz dual-core i5', '2.2 GHz dual-core i7'],
        '2017': ['1.8 GHz dual-core i5'],
        '2018': ['1.6 GHz dual-core i5'],
        '2019': ['1.6 GHz dual-core i5'],
        '2020': ['1.1 GHz dual-core i3', '1.1 GHz quad-core i5', '1.2 GHz quad-core i7'],
        '2021': ['Apple M1'],
        '2022': ['Apple M2']
      }
    },
    rams: {
      '11': {
        'Mid 2013': ['4GB', '8GB'],
        'Early 2014': ['4GB', '8GB'],
        'Early 2015': ['4GB', '8GB']
      },
      '13': {
        'Mid 2012': ['4GB', '8GB'],
        'Mid 2013': ['4GB', '8GB'],
        'Early 2014': ['4GB', '8GB'],
        'Early 2015': ['4GB', '8GB'],
        '2017': ['8GB', '16GB'],
        '2018': ['8GB', '16GB'],
        '2019': ['8GB', '16GB'],
        '2020': ['8GB', '16GB'],
        '2021': ['8GB', '16GB'],
        '2022': ['8GB', '16GB', '32GB']
      }
    },
    storages: {
      '11': {
        'Mid 2013': ['128GB', '256GB', '512GB'],
        'Early 2014': ['128GB', '256GB'],
        'Early 2015': ['128GB', '256GB', '512GB']
      },
      '13': {
        'Mid 2012': ['128GB', '256GB', '512GB'],
        'Mid 2013': ['128GB', '256GB', '512GB'],
        'Early 2014': ['128GB', '256GB'],
        'Early 2015': ['128GB', '256GB', '512GB'],
        '2017': ['128GB', '256GB'],
        '2018': ['128GB', '256GB', '512GB', '1.5TB'],
        '2019': ['128GB', '256GB', '512GB', '1TB'],
        '2020': ['256GB', '512GB', '1TB', '2TB'],
        '2021': ['256GB', '512GB', '1TB'],
        '2022': ['256GB', '512GB', '1TB', '2TB']
      }
    },
    GPU: {
      '11': {},
      '13': {}
    }
  },
  'Macbook Pro': {
    screenSizes: ['13', '14', '15', '16'],
    releaseDates: {
      '13': ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
      '14': ['2021', '2022', '2023'],
      '15': [
        '2008',
        '2009',
        '2010',
        '2011',
        '2012',
        '2013',
        '2014',
        '2015',
        '2016',
        '2017',
        '2018',
        '2019'
      ],
      '16': ['2019', '2020', '2021', '2023'] // Added release dates for 16" until 2022
    },

    processors: {
      '13': {
        '2012': ['2.5 GHz dual-core i5', '2.9 GHz dual-core i7'],
        '2013': ['2.4 GHz dual-core i5', '2.6 GHz dual-core i5', '2.8 GHz dual-core i7'],
        '2014': ['2.6 GHz dual-core i5', '2.8 GHz dual-core i5', '3.0 GHz dual-core i7'],
        '2015': ['2.7 GHz dual-core i5', '2.9 GHz dual-core i5', '3.1 GHz dual-core i7'],
        '2016': ['2.0 GHz dual-core i5', '3.1 GHz dual-core i7'],
        '2017': ['1.7 GHz Core i7', '2.3 GHz dual-core i5', '3.5 GHz dual-core i7'],
        '2018': ['2.3 GHz Core i5 ', '2.7 GHz Core i7'],
        '2019': ['1.4 GHz quad-core i5', '2.4 GHz quad-core i5', '2.8 GHz quad-core i7'],
        '2020': ['1.4 GHz Core i5 ', '1.7 GHz Core i7 ', '2.0 GHz Core i5', '2.3 GHz Core i7'],
        '2022': ['3.49 GHz Apple M2']
      },
      '14': {
        '2021': ['3.2 GHz Apple M1 Pro', '3.2 GHz Apple M1 Max'],
        '2022': ['Apple M2 Pro', 'Apple M2 Max'],
        '2023': ['3.49 GHz Apple M2 Pro', '3.68 GHz Apple M2 Max']
      },
      '15': {
        '2008': ['2.4 GHz', '2.5 GHz'],
        '2009': ['2.53 GHz', '2.66 GHz', '2.8 GHz', '3.06 GHz'],
        '2010': ['2.4 GHz', '2.53 GHz', '2.66 GHz', '2.8 GHz'],
        '2011': ['2.0 GHz quad-core', '2.2 GHz quad-core', '2.3 GHz quad-core'],
        '2012': ['2.3 GHz quad-core', '2.6 GHz quad-core', '2.7 GHz quad-core'],
        '2013': ['2.0 GHz quad-core', '2.3 GHz quad-core', '2.6 GHz quad-core'],
        '2014': ['2.2 GHz quad-core', '2.5 GHz quad-core', '2.8 GHz quad-core'],
        '2015': ['2.2 GHz quad-core', '2.5 GHz quad-core', '2.8 GHz quad-core'],
        '2016': ['2.6 GHz quad-core', '2.7 GHz quad-core', '2.9 GHz quad-core'],
        '2017': ['2.8 GHz Core i7 ', '2.9 GHz Core i7', '3.1 GHz Core i7'],
        '2018': ['2.2 GHz Core i7', '2.6 GHz Core i7', '2.9 GHz Core i9'],
        '2019': ['2.6 GHz 6-core', '2.3 GHz 8-core', '2.4 GHz 8-core'],
        '2020': ['2.3 GHz 8-core', '2.4 GHz 8-core'],
        '2021': ['2.4 GHz 10-core', '2.5 GHz 10-core']
      },
      '16': {
        '2019': ['2.6 GHz Core i7', '2.3 GH i9', '2.4 GHz Core i9', '2.6 GHz Core i7'],
        '2021': ['3.2 GHz Apple M1 Max'],
        '2023': ['3.4 GHz 12-core M2 Pro', '3.68 GHz 12-core M2 Pro', '3.68 GHz 16-core M2 Max']
      }
    },
    rams: {
      '13': {
        '2012': ['4GB', '8GB'],
        '2013': ['4GB', '8GB', '16GB'],
        '2014': ['8GB', '16GB'],
        '2015': ['8GB', '16GB'],
        '2016': ['8GB', '16GB'],
        '2017': ['8GB', '16GB'],
        '2018': ['8GB', '16GB'],
        '2019': ['8GB', '16GB'],
        '2020': ['8GB', '16GB', '32GB']
      },
      '14': {
        '2021': ['16GB', '32GB'],
        '2022': ['16GB', '32GB'],
        '2023': ['16GB', '32GB']
      },
      '15': {
        '2008': ['2GB', '4GB'],
        '2009': ['4GB', '8GB'],
        '2010': ['4GB', '8GB'],
        '2011': ['4GB', '8GB', '16GB'],
        '2012': ['8GB', '16GB'],
        '2013': ['8GB', '16GB', '32GB'],
        '2014': ['16GB', '32GB'],
        '2015': ['16GB', '32GB'],
        '2016': ['16GB', '32GB'],
        '2017': ['16GB', '32GB'],
        '2018': ['16GB', '32GB'],
        '2019': ['16GB', '32GB'],
        '2020': ['16GB', '32GB', '64GB'],
        '2021': ['16GB', '32GB', '64GB'],
        '2022': ['16GB', '32GB', '64GB']
      },
      '16': {
        '2019': ['16GB', '32GB', '64GB'],
        '2020': ['16GB', '32GB', '64GB'],
        '2021': ['16GB', '32GB', '64GB', '96GB'],
        '2023': ['16GB', '32GB', '64GB', '96GB']
      }
    },
    storages: {
      '13': {
        '2012': ['500GB HDD', '128GB SSD', '256GB SSD', '512GB SSD'],
        '2013': ['128GB SSD', '256GB SSD', '512GB SSD', '1TB SSD'],
        '2014': ['128GB SSD', '256GB SSD', '512GB SSD', '1TB SSD'],
        '2015': ['128GB SSD', '256GB SSD', '512GB SSD', '1TB SSD'],
        '2016': ['256GB SSD', '512GB SSD', '1TB SSD'],
        '2017': ['128GB SSD', '256GB SSD', '512GB SSD', '1TB SSD'],
        '2018': ['128GB SSD', '256GB SSD', '512GB SSD', '1TB SSD', '2TB SSD'],
        '2019': ['128GB SSD', '256GB SSD', '512GB SSD', '1TB SSD', '2TB SSD'],
        '2020': ['256GB SSD', '512GB SSD', '1TB SSD', '2TB SSD', '4TB SSD']
      },
      '14': {
        '2021': ['512GB SSD', '1TB SSD'],
        '2022': ['512GB SSD', '1TB SSD'],
        '2023': ['512GB SSD', '1TB SSD']
      },
      '15': {
        '2008': ['250GB HDD', '320GB HDD'],
        '2009': ['250GB HDD', '320GB HDD', '500GB HDD'],
        '2010': ['250GB HDD', '500GB HDD', '750GB HDD'],
        '2011': ['500GB HDD', '750GB HDD', '1TB HDD'],
        '2012': ['500GB HDD', '750GB HDD', '1TB HDD'],
        '2013': ['500GB HDD', '1TB HDD', '256GB SSD', '512GB SSD'],
        '2014': ['512GB SSD', '1TB SSD'],
        '2015': ['512GB SSD', '1TB SSD', '2TB SSD'],
        '2016': ['256GB SSD', '512GB SSD', '1TB SSD', '2TB SSD'],
        '2017': ['256GB SSD', '512GB SSD', '1TB SSD', '2TB SSD'],
        '2018': ['256GB SSD', '512GB SSD', '1TB SSD', '2TB SSD', '4TB SSD'],
        '2019': ['256GB SSD', '512GB SSD', '1TB SSD', '2TB SSD', '4TB SSD']
      },
      '16': {
        '2019': ['512GB SSD', '1TB SSD', '2TB SSD', '4TB SSD', '8TB SSD'],
        '2020': ['512GB SSD', '1TB SSD', '2TB SSD', '4TB SSD', '8TB SSD'],
        '2021': ['512GB SSD', '1TB SSD', '2TB SSD', '4TB SSD', '8TB SSD'],
        '2023': ['512GB SSD', '1TB SSD', '2TB SSD']
      }
    },
    GPU: {
      '13': {
        '2020': ['8 GPU'],
        '2021': ['Apple M1'],
        '2022': ['10-core GPU']
      },
      '14': {
        '2021': ['14-core GPU', '16-core GPU', '32-core GPU'],

        '2023': ['16-core GPU', '19-core GPU', '32-core GPU', '38-core GPU']
      },
      '15': {
        '2008': ['NVIDIA GeForce 8600M GT'],
        '2009': ['NVIDIA GeForce 9400M', 'NVIDIA GeForce 9600M GT'],
        '2010': ['NVIDIA GeForce GT 330M', 'Intel HD Graphics'],
        '2011': ['AMD Radeon HD 6490M', 'AMD Radeon HD 6750M', 'Intel HD Graphics 3000'],
        '2012': ['NVIDIA GeForce GT 650M', 'Intel HD Graphics 4000'],
        '2013': ['NVIDIA GeForce GT 750M', 'Intel Iris Pro Graphics'],
        '2014': ['NVIDIA GeForce GT 750M', 'Intel Iris Pro Graphics'],
        '2015': ['AMD Radeon R9 M370X', 'Intel Iris Pro Graphics'],
        '2016': ['AMD Radeon Pro 450/455/460', 'Intel HD Graphics 530'],
        '2017': ['AMD Radeon Pro 555/560', 'Intel HD Graphics 630'],
        '2018': ['AMD Radeon Pro 555X/560X/Vega 16/Vega 20', 'Intel UHD Graphics 630'],
        '2019': ['AMD Radeon Pro 555X/560X/5300M/5500M', 'Intel UHD Graphics 630']
      },
      '16': {
        '2019': ['AMD Radeon Pro 5300M/5500M', 'Intel UHD Graphics 630'],
        '2020': ['8 GPU', 'Intel UHD Graphics 630'],
        '2021': ['16 GPU', '24 GPU', '32 GPU'],
        '2023': ['19 GPU', '30 GPU', '38 GPU']
      }
    }
  }
};

function flattenData(data: any) {
  const rows: any[] = [];

  for (const model in data) {
    for (const screenSize of data[model].screenSizes) {
      const releaseDates = data[model].releaseDates[screenSize];
      for (const releaseDate of releaseDates) {
        const processors = data[model].processors[screenSize]?.[releaseDate] || [];
        const rams = data[model].rams[screenSize]?.[releaseDate] || [];
        const storages = data[model].storages[screenSize]?.[releaseDate] || [];

        for (const processor of processors) {
          for (const ram of rams) {
            for (const storage of storages) {
              rows.push({
                Model: model,
                ScreenSize: screenSize,
                ReleaseDate: releaseDate,
                Processor: processor,
                RAM: ram,
                Storage: storage
              });
            }
          }
        }
      }
    }
  }
  return rows;
}

function exportToExcel(data: any[]) {
  const ws = utils.json_to_sheet(data);
  const wb = utils.book_new();
  utils.book_append_sheet(wb, ws, 'MacBook Data');
  const excelBuffer = write(wb, { bookType: 'xlsx', type: 'buffer' });
  writeFile('MacBookData.xlsx', excelBuffer, (err) => {
    if (err) console.error('Error writing to file:', err);
    else console.log('Exported to MacBookData.xlsx successfully!');
  });
}

const flattenedData = flattenData(macbookData);
exportToExcel(flattenedData);
