angular.module('parte1.services.Parte1', [])
  .factory('Parte1', function($q, $http, Utils) {

    var colluns = [
      { id: 't', label: 'Topping', type: 'string' },
      { id: 's', label: 'Slices', type: 'number' }
    ];


    var createRowPie = function(name, key, students) {
      var getFilterStudentsByKey = Utils.isFilterData(students, { 'degreeId': [key] });
      var addRow = [
        { 'v': name },
        { 'v': getFilterStudentsByKey.length },
      ];
      service.sumStudentsByKey += getFilterStudentsByKey.length;
      return addRow;
    };


    var service = {
      itemStudents: [],
      sumStudentsByKey: 0,
      setStudents300: function(obj) {
        return $q(function(resolve) {
          $http.get('data/students.json').success(function(data) {
            var element = obj.map(function(row) {
              service.itemStudents.push({
                "id": row["id"],
                "ra": row["ra"],
                "name": row["name"],
                "degreeId": row["degreeId"],
                "classId": row["classId"],
              });

            })
            resolve(service.itemStudents);
          });
        });
      },
      getDegrees: function() {
        return $q(function(resolve) {
          $http.get('data/degrees.json').success(function(data) {
            resolve(data);
          });
        });
      },
      getClasses: function() {
        return $q(function(resolve) {
          $http.get('data/classes.json').success(function(data) {
            resolve(data.classes);
          });
        });
      },
      getStudents: function(obj) {
        return $q(function(resolve) {
          $http.get('data/students.json').success(function(data) {
            var pesquisa = Utils.isFilterData(service.itemStudents, obj);
            resolve(pesquisa);
          });
        });
      },
      loadStudents: function(obj) {
        return $q(function(resolve) {
          $http.get('data/students.json').success(function(data) {
            resolve(data);
          });
        });
      },
      getAllStudentsPieChart: function() {
        return $q.all([
          $http.get('data/degrees.json'),
          $http.get('data/students.json')
        ]).then(function(data) {
          service.sumStudentsByKey = 0;
          var degrees = data[0].data;
          var students = service.itemStudents;
          var dataPieChart = (function() {
            return {
              'cols': colluns,
              'rows': degrees.map(function(row) {
                return {
                  'c': createRowPie(row["name"], row["id"], students),
                };
              })
            };
          })();
          return dataPieChart;
        });
      },


    };
    return service;

  });