##
 # Licensed under the Apache License, Version 2.0 (the "License");
 # you may not use this file except in compliance with the License.
 # You may obtain a copy of the License at
 #
 # http://www.apache.org/licenses/LICENSE-2.0
 #
 # Unless required by applicable law or agreed to in writing, software
 # distributed under the License is distributed on an "AS IS" BASIS,
 # WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 # See the License for the specific language governing permissions and
 # limitations under the License.
 ##

from libcpp.memory cimport shared_ptr
from pytwisterx.net.txrequest cimport CTxRequest


cdef extern from "../../../cpp/src/twisterx/net/channel.hpp" namespace "twisterx":
    cdef cppclass CChannelSendCallback "twisterx::ChannelSendCallback":
        void sendComplete(shared_ptr[CTxRequest])
        void sendFinishComplete(shared_ptr[CTxRequest])

    cdef cppclass CChannelReceiveCallback "twisterx::ChannelReceiveCallback":
        void receivedData(int, void *, int)
        void receivedHeader(int, int, int *, int)
