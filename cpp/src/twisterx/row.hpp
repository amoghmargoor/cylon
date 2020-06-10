/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

#ifndef TWISTERX_SRC_TWISTERX_ROW_HPP_
#define TWISTERX_SRC_TWISTERX_ROW_HPP_

#include <string>
#include <vector>
namespace twisterx {
class Row {
 private:
  std::string table_id;
  int64_t row_index;
 public:
  Row(const std::string &tale_id, int64_t row_index);

  int64_t RowIndex();

  int8_t GetInt8(int64_t col_index);
  uint8_t GetUInt8(int64_t col_index);
  int16_t GetInt16(int64_t col_index);
  uint16_t GetUInt16(int64_t col_index);
  int32_t GetInt32(int64_t col_index);
  uint32_t GetUInt32(int64_t col_index);
  int64_t GetInt64(int64_t col_index);
  uint64_t GetUInt64(int64_t col_index);
};
}

#endif //TWISTERX_SRC_TWISTERX_ROW_HPP_
