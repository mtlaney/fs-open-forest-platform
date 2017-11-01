'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    let forestLocations = [
      {
        id: 1,
        forest_id: 3,
        district: null,
        allowed: false,
        type: 'area',
        description: 'Wilderness',
        image_filename: null
      }
      ,
      {
        id: 2,
        forest_id: 3,
        district: null,
        allowed: false,
        type: 'area',
        description: 'Research natural areas',
        image_filename: null
      },
      {
        id: 3,
        forest_id: 3,
        district: null,
        allowed: false,
        type: 'area',
        description: '100 feet of a trail',
        image_filename: null
      },
      {
        id: 4,
        forest_id: 3,
        district: null,
        allowed: false,
        type: 'area',
        description: 'Campgrounds or administrative sites',
        image_filename: null
      },
      {
        id: 5,
        forest_id: 3,
        district: null,
        allowed: false,
        type: 'area',
        description: '300 feet of streams or lakes',
        image_filename: null
      },
      {
        id: 6,
        forest_id: 3,
        district: null,
        allowed: false,
        type: 'area',
        description: 'Areas posted "No Christmas Tree Cutting”',
        image_filename: null
      },
      {
        id: 7,
        forest_id: 3,
        district: null,
        allowed: false,
        type: 'area',
        description: 'East of Little Crater Lake Campground on Road 58, because of Warms Springs Indian Reservation',
        image_filename: null
      },
      {
        id: 8,
        forest_id: 3,
        district: null,
        allowed: false,
        type: 'area',
        description: 'Do not remove Pacific Yew trees',
        image_filename: null
      },
      {
        id: 9,
        forest_id: 3,
        district: null,
        allowed: false,
        type: 'area',
        description: 'Campgrounds, administrative sites, or summer home/rec. residence areas',
        image_filename: null
      },
      {
        id: 10,
        forest_id: 3,
        district: null,
        allowed: false,
        type: 'road',
        description: 'Highway 26',
        image_filename: null
      },
      {
        id: 11,
        forest_id: 3,
        district: null,
        allowed: false,
        type: 'road',
        description: 'Highway 224',
        image_filename: null
      },
      {
        id: 12,
        forest_id: 3,
        district: null,
        allowed: false,
        type: 'road',
        description: 'Road 42 (Timothy Lake Road)',
        image_filename: null
      },
      {
        id: 13,
        forest_id: 3,
        district: null,
        allowed: false,
        type: 'road',
        description: 'Road 50 (Timberline Road)',
        image_filename: null
      },
      {
        id: 14,
        forest_id: 3,
        district: null,
        allowed: false,
        type: 'road',
        description: 'Road 2645 (Westleg Road)',
        image_filename: null
      },
      {
        id: 15,
        forest_id: 3,
        district: null,
        allowed: false,
        type: 'road',
        description: 'Road 2618 (Salmon River Road)',
        image_filename: null
      },
      {
        id: 16,
        forest_id: 3,
        district: null,
        allowed: false,
        type: 'road',
        description: 'Road 2627, 2627-207',
        image_filename: null
      },
      {
        id: 17,
        forest_id: 3,
        district: 'Clackamas',
        allowed: true,
        type: 'road',
        description: '4210',
        image_filename: null
      },
      {
        id: 18,
        forest_id: 3,
        district: 'Clackamas',
        allowed: true,
        type: 'road',
        description: '45, 4540, 4545',
        image_filename: null
      },
      {
        id: 19,
        forest_id: 3,
        district: 'Clackamas',
        allowed: true,
        type: 'road',
        description: '4660, 4661, 4670, 4671',
        image_filename: null
      },
      {
        id: 20,
        forest_id: 3,
        district: 'Clackamas',
        allowed: true,
        type: 'road',
        description: '5730, 5731',
        image_filename: null
      },
      {
        id: 21,
        forest_id: 3,
        district: 'Clackamas',
        allowed: true,
        type: 'road',
        description: '6340, 6341, 6350, 6355, 6370',
        image_filename: null
      },
      {
        id: 22,
        forest_id: 3,
        district: 'Clackamas',
        allowed: true,
        type: 'road',
        description: '5410, 5411',
        image_filename: null
      },
      {
        id: 23,
        forest_id: 3,
        district: 'Clackamas',
        allowed: true,
        type: 'road',
        description: '58, 5810, 5820, 5830',
        image_filename: null
      },
      {
        id: 24,
        forest_id: 3,
        district: 'Zigzag',
        allowed: true,
        type: 'road',
        description: '18, 1828, 1828118',
        image_filename: null
      },
      {
        id: 25,
        forest_id: 3,
        district: 'Zigzag',
        allowed: true,
        type: 'road',
        description: '2656 and spurs',
        image_filename: null
      },
      {
        id: 26,
        forest_id: 3,
        district: 'Zigzag',
        allowed: true,
        type: 'road',
        description: '58, 5850, 5855, 5860, 5870, 5880',
        image_filename: null
      },
      {
        id: 27,
        forest_id: 3,
        district: null,
        allowed: true,
        type: 'district',
        description: 'Clackamas',
        image_filename: 'clackamas'
      },
      {
        id: 28,
        forest_id: 3,
        district: null,
        allowed: true,
        type: 'district',
        description: 'Zigzag',
        image_filename: 'zigzag'
      },
      {
        id: 29,
        forest_id: 1,
        district: null,
        allowed: false,
        type: 'info',
        description: 'People may enter the cutting area on foot near the cutting area exit.  Parking is available along County Road 69 near the exit.',
        image_filename: null
      },
      {
        id: 30,
        forest_id: 1,
        district: null,
        allowed: false,
        type: 'info',
        description: '4WD or appropriate traction devices (chains or similar, not “tire socks”) are required on all vehicles in the cutting area.',
        image_filename: null
      },
      {
        id: 31,
        forest_id: 1,
        district: null,
        allowed: false,
        type: 'info',
        description: 'Be aware of what your vehicle allows related to traction devices. Not all vehicles are capable of handling the winter conditions in the cutting area. 4WD with bald tires isn’t worth much.',
        image_filename: null
      },
      {
        id: 32,
        forest_id: 1,
        district: null,
        allowed: false,
        type: 'info',
        description: 'People who do not have 4WD or proper traction devices will not be allowed into the cutting area –improperly equipped vehicles can get stuck, blocking the road and creating a safety hazard for everyone, not just the individuals involved.',
        image_filename: null
      },
      {
        id: 53,
        forest_id: 1,
        district: null,
        allowed: false,
        type: 'info',
        description: 'You must arrive at the cutting area AFTER 8:30 am and BEFORE 2:30 pm each day and be out of the cutting area by 4:00 pm.',
        image_filename: null
      },
      {
        id: 54,
        forest_id: 1,
        district: null,
        allowed: false,
        type: 'info',
        description: 'Drive time from Fort Collins VIS office is approximately one hour 15 minutes or more depending on the weather.',
        image_filename: null
      },
      {
        id: 55,
        forest_id: 1,
        district: null,
        allowed: false,
        type: 'info',
        description: 'If you arrive at the CLRD office after 1:00 you will not have enough time to get to the entrance before it closes for the day.',
        image_filename: null
      },
      {
        id: 56,
        forest_id: 1,
        district: null,
        allowed: true,
        type: 'road',
        description: 'From Fort Collins take Highway 287 21 miles north to Livermore, ' +
        'at Livermore, turn left onto County Road 74E (Red Feather Lakes Road), ' +
        'follow 74E 16 miles and then turn left onto County Road 68C (Boy Scout Road)',
        image_filename: null
      },
      {
        id: 57,
        forest_id: 1,
        district: null,
        allowed: true,
        type: 'road',
        description: ' - LOOK FOR THE BIG SMOKEY BEAR SIGN - ' +
        'follow 68C for 7 miles and signs or Forest Service personnel will direct you into the area.',
        image_filename: null
      },
      {
        id: 58,
        forest_id: 1,
        district: null,
        allowed: true,
        type: 'district',
        description: 'Sulphur Ranger District - Elk Creek Cutting Area',
        image_filename: 'elk-creek'
      },
      {
        id: 59,
        forest_id: 1,
        district: null,
        allowed: true,
        type: 'district',
        description: 'Sulphur Ranger District Cutting Areas',
        image_filename: 'sulphur'
      },
      {
        id: 60,
        forest_id: 1,
        district: null,
        allowed: true,
        type: 'district',
        description: 'Canyon Lakes Ranger District - Red Feather Cutting Area',
        image_filename: 'red-feather'
      },
      {
        id: 33,
        forest_id: 3,
        district: 'Barlow and Hood',
        allowed: false,
        type: 'area',
        description: 'Dalles Watershed',
        image_filename: null
      },
      {
        id: 34,
        forest_id: 3,
        district: 'Barlow and Hood',
        allowed: false,
        type: 'road',
        description: 'Highway 216',
        image_filename: null
      },
      {
        id: 35,
        forest_id: 3,
        district: 'Barlow and Hood',
        allowed: false,
        type: 'area',
        description: 'Camp Baldwin',
        image_filename: null
      },
      {
        id: 36,
        forest_id: 3,
        district: 'Barlow and Hood',
        allowed: false,
        type: 'area',
        description: 'Warm Springs Reservation',
        image_filename: null
      },
      {
        id: 37,
        forest_id: 3,
        district: 'Barlow and Hood',
        allowed: false,
        type: 'road',
        description: 'Highway 26',
        image_filename: null
      },
      {
        id: 38,
        forest_id: 3,
        district: 'Barlow and Hood',
        allowed: false,
        type: 'road',
        description: 'Highway 35',
        image_filename: null
      },
      {
        id: 46,
        forest_id: 2,
        district: null,
        allowed: false,
        type: 'area',
        description: 'Plantations',
        image_filename: null
      },
      {
        id: 47,
        forest_id: 2,
        district: null,
        allowed: false,
        type: 'area',
        description: 'Previously thinned stands of trees',
        image_filename: null
      },
      {
        id: 48,
        forest_id: 2,
        district: null,
        allowed: false,
        type: 'area',
        description: 'Campgrounds',
        image_filename: null
      },
      {
        id: 49,
        forest_id: 2,
        district: null,
        allowed: false,
        type: 'area',
        description: 'Areas posted as closed to Christmas tree cutting',
        image_filename: null
      },
      {
        id: 50,
        forest_id: 4,
        district: null,
        allowed: true,
        type: 'district',
        description: 'Washakie',
        image_filename: 'washakie'
      },
      {
        id: 51,
        forest_id: 4,
        district: null,
        allowed: false,
        type: 'area',
        description: 'Popo Agie Wilderness Area',
        image_filename: null
      },
      {
        id: 52,
        forest_id: 4,
        district: null,
        allowed: false,
        type: 'area',
        description: 'North of and on the Wind River reservation',
        image_filename: null
      }
    ];
    return queryInterface.bulkInsert('forestLocations', forestLocations);
  },
  down: function(queryInterface, Sequelize) {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('forestLocations', {
      forest_id: {
        [Op.in]: [1, 2, 3, 4]
      }
    });
  }
};
